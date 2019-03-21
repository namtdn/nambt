<?php
    
   interface maytinh{

       public function cong();
       public function tru();
       public function nhan();
       public function chia();
   }

    class tinhtoan implements maytinh{

       protected $a;
       protected $b;
       protected $kq;

       public function setData($x, $z){
           $this->a = $x;
           $this->b = $z;
       }

       public function cong(){
           $this->kq = $this->a + $this->b;
           return $this->kq;
       }

       public function tru(){
           $this->kq = $this->a - $this->b;
           return $this->kq;
       }

       public function nhan(){
           $this->kq = $this->a * $this->b;
           return $this->kq;
       }

       public function chia(){
           if($this->b == 0){
               echo "Infinity";
           }else{
               $this->kq = $this->a / $this->b;
               return $this->kq;
           }
       }
   }

   $tinhtoan = new tinhtoan;
   $tinhtoan->setData(6,2);
   echo $tinhtoan->cong()."<br>";
   echo $tinhtoan->tru()."<br>";
   echo $tinhtoan->nhan()."<br>";
   echo $tinhtoan->chia()."<br>";
?>
