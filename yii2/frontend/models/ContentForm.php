<?php

namespace frontend\models;

use Yii;
use yii\base\Model;
use common\models\tables\ProjectContent;

/**
 * ContactForm is the model behind the contact form.
 */
class ContentForm extends Model
{
  public $content;
   

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            // name, email, subject and body are required
            [['content'], 'required'],
            
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




    public function setContent()
    {
          if ($this->validate()) {
            $projectContent = new ProjectContent();
            $projectContent->content   =   $this->content;
            if ($projectContent->save(false)) {
                return $projectContent;
            }
        }

        return null;
    }


}
