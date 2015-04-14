<?php

namespace frontend\controllers;

use common\models\tables\Project;
use frontend\models\BasicInformationForm;
use frontend\models\ContentForm;
use Yii;
use yii\web\Controller;

class PublishController extends Controller
{

	public $layout  = 'publish';
    public function actionIndex()
    {
         $model = new BasicInformationForm();

        if ($model->load(Yii::$app->request->post())) {
           if($basicInformation = $model->setBasicInformation()) {
                 return $this->goBack();
            }
        }

        return $this->render('index', [
            'model' => $model,
        ]);
    
    }

    public function actionFund()
    {
         $returnModel = new ReturnForm();
         var_dump((Yii::$app->request->post()));
         var_dump($returnModel->load(Yii::$app->request->post()));
         $return = $returnModel->setReturn();
        /* $return = $model->setReturn();
         var_dump($return);*/
       /* if ($model->load(Yii::$app->request->post())) {
           if($return = $model->setReturn()) {
                 return $this->goBack();
            }
        }*/


    	  return $this->render('fund', [
            'model' => $returnModel,
        ]);
    }

    public function actionContent()
    {
       $model = new ContentForm();
        if ($model->load(Yii::$app->request->post())) {
           if($content = $model->setContent()) {
                 return $this->goBack();
            }
        }  
    	return $this->render('content',['model'=>$model]);
    }

    public function actionInfo()
    {
    	return $this->render('info');
    }

    public function actionTestGetTag(){
         $model = new Project();
         if ($model->load(Yii::$app->request->post())) {
            if($basicInformation = $model->setBasicInformation()) {
                 return $this->goHome();
            }
        }

        return $this->render('index', [
            'model' => $model,
        ]);
    }

    public function actionTest(){
        return $this->render('test');
    }
}
