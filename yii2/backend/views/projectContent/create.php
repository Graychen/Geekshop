<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\tables\ProjectContent */

$this->title = 'Create Project Content';
$this->params['breadcrumbs'][] = ['label' => 'Project Contents', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="project-content-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
