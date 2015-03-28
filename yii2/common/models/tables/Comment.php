<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "comment".
 *
 * @property integer $id
 * @property integer $parent_id
 * @property integer $user_id
 * @property integer $project_id
 * @property string $content
 * @property integer $status
 */
class Comment extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'comment';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'parent_id', 'user_id'], 'required'],
            [['id', 'parent_id', 'user_id', 'project_id', 'status'], 'integer'],
            [['content'], 'string', 'max' => 11]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'parent_id' => 'Parent ID',
            'user_id' => 'User ID',
            'project_id' => 'Project ID',
            'content' => 'Content',
            'status' => 'Status',
        ];
    }
}
