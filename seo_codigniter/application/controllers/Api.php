<?php
class Api extends CI_Controller
{
   
    public function login_add()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
       
        $data = json_decode(file_get_contents("php://input"),true);
        $user=$this->Seo_model->login($data['email'],$data['password']);
        // $user= $this->Student_model->login($data);
        if(isset($user->name)){
            $this->load->library('JWT');
            $token=array(
                "iss" =>$this->config->item('iss'),
                "aud" =>$this->config->item('aud'),
                "iat" =>$this->config->item('iat'),
                "nbf" =>$this->config->item('nbf'),
                "exp" =>$this->config->item('exp'),
                "data"=>['name'=>$user->name,'id'=>$user->id]
            );
          $t= $this->jwt->encode($token,$this->config->item('key') ,'HS256');
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['token'=>$t ,'status'=>true,'data'=>$user])) ;
        }else{
           // echo "Error";
            $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode(['status'=>false]));
        }
      
    }



}