<?php

namespace frontend\models;

use Yii;
use yii\base\Model;
use common\models\tables\ProjectReturn;

/**
 * ContactForm is the model behind the contact form.
 * @property integer $id
 * @property integer $project_id
 * @property integer $money
 * @property integer $number
 * @property integer $postage
 * @property integer $time
 * @property integer $project_num
 */
class ReturnForm extends Model
{
   public $money;
   public $number;
   public $postage;
   public $time;
   public $project_num;
   public $support_content;
   

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['money'], 'required'],
            
        ];
    }

    /**
     * @inheritdoc
     */
  /*  public function attributeLabels()
    {
        return [
            'verifyCode' => 'Verification Code',
        ];
    }*/




    public function setReturn()
    {
            $return = new ProjectReturn();
            echo $this->project_num;
            echo $this->support_content;
            //$return->money             =   $this->money;
          if ($this->validate()) {
            var_dump($this->supportContent);
            $return->number            =    $this->number;
            $return->postage           =    $this->postage;
            $return->time              =    $this->time;
            $return->project_num       =    $this->project_num;
            $return->support_content   =    $this->support_content;
       
            if ($return->save(false)) {
                return $return;
            }
        }

        return $this->support_content;
    }


}
