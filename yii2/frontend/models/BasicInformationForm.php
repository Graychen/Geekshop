<?php

namespace frontend\models;

use Yii;
use yii\base\Model;
use common\models\tables\Project;

/**
 * ContactForm is the model behind the contact form.
 */
class BasicInformationForm extends Model
{
   public $title;
   public $type;
   public $tags;
   public $address;
   public $intro;
   public $time;
   public $money;
   

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['title', 'type', 'address','intro','time','money'], 'required'],
            
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




    public function setBasicInformation()
    {
          if ($this->validate()) {
            $project = new Project();

           
            $project->title   =   $this->title;
        
            $project->type    =   $this->type;
           // $project->tag()   =   $this->tags;
          // $project->address =   $this->address;
            $project->intro   =   $this->intro;
            $project->time    =   $this->time;
            $project->money   =   $this->money;
        
       
            if ($project->save(false)) {
                return $project;
            }
        }

        return null;
    }


}
