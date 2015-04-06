<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "project_return".
 *
 * @property integer $id
 * @property integer $project_id
 * @property integer $money
 * @property integer $number
 * @property integer $postage
 * @property integer $time
 * @property integer $project_num
 */
class ProjectReturn extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'project_return';
    }

    /**
     * @inheritdoc
     */
   /* public function rules()
    {
        return [
            [['id', 'project_id', 'money'], 'required'],
            [['id', 'project_id', 'money', 'number', 'postage', 'time', 'project_num'], 'integer']
        ];
    }*/

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'project_id' => 'Project ID',
            'money' => 'Money',
            'number' => 'Number',
            'postage' => 'Postage',
            'time' => 'Time',
            'project_num' => 'Project Num',
        ];
    }
}
