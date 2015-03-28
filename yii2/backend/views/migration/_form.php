<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\tables\Migration */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="migration-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'version')->textInput(['maxlength' => 180]) ?>

    <?= $form->field($model, 'apply_time')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
