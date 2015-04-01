<?php

namespace frontend\controllers;

use common\models\tables\Project;
use frontend\models\BasicInformationForm;
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
    	return $this->render('fund');
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
}
