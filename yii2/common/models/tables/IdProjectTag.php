<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "id_project_tag".
 *
 * @property integer $id
 * @property integer $project_id
 * @property integer $tag_id
 */
class IdProjectTag extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'id_project_tag';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'project_id', 'tag_id'], 'required'],
            [['id', 'project_id', 'tag_id'], 'integer']
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
            'tag_id' => 'Tag ID',
        ];
    }
}
