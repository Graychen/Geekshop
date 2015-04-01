<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "id_user_project".
 *
 * @property integer $id
 * @property integer $user_id
 * @property integer $project_id
 * @property integer $type
 */
class IdUserProject extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'id_user_project';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'user_id', 'project_id'], 'required'],
            [['id', 'user_id', 'project_id', 'type'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'project_id' => 'Project ID',
            'type' => 'Type',
        ];
    }
}
