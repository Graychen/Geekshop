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
   
   

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['money', 'number', 'postage','time','project_num'], 'required'],
            
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'verifyCode' => 'Verification Code',
        ];
    }




    public function setReturn()
    {
          if ($this->validate()) {
            $return = new ProjectReturn();
           
            $return->money         =   "1";
            $return->number        =  "1";
            $return->postage       =   "1";
            $return->time          =   "1";
            $return->project_num   =   "1";
       
            if ($return->save(false)) {
                return $return;
            }
        }

        return null;
    }


}
