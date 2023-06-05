<?php
class Seo_model extends CI_Model
{
    public function login($email,$pass)
    {
     return $this->db->where(['email'=>$email,'password'=>$pass])->get('users')->row();
  
    }
}