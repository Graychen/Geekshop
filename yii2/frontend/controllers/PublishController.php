<?php

namespace frontend\controllers;

use common\models\tables\Project;
use frontend\models\ReturnForm;
use Yii;
use yii\web\Controller;

class PublishController extends Controller
{

	//public $layout  = 'publish';
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
         $model = new ReturnForm();
         $model->load(Yii::$app->request->post());
         $return = $model->setReturn();
        var_dump($return);
        /* $return = $model->setReturn();
         var_dump($return);*/
       /* if ($model->load(Yii::$app->request->post())) {
           if($return = $model->setReturn()) {
                 return $this->goBack();
            }
        }*/


    	  return $this->render('fund', [
            'model' => $model,
        ]);
    }

    public function actionContent()
    {
    	return $this->render('content');
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
        $this->render();
    }
}
