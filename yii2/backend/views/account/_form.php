<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\tables\Account */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="account-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'id')->textInput() ?>

    <?= $form->field($model, 'balance')->textInput() ?>

    <?= $form->field($model, 'income')->textInput() ?>

    <?= $form->field($model, 'expend')->textInput() ?>

    <?= $form->field($model, 'withdraw')->textInput() ?>

    <?= $form->field($model, 'time')->textInput(['maxlength' => 6]) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => 100]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
