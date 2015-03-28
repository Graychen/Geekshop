<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "project_content".
 *
 * @property integer $id
 * @property integer $project_id
 * @property string $title
 * @property string $content
 */
class ProjectContent extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'project_content';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'project_id', 'title', 'content'], 'required'],
            [['id', 'project_id'], 'integer'],
            [['title'], 'string', 'max' => 100],
            [['content'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'project_id' => 'Project ID',
            'title' => 'Title',
            'content' => 'Content',
        ];
    }
}
