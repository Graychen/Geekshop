<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "tag".
 *
 * @property integer $id
 * @property string $tag_name
 */
class Tag extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tag';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'tag_name'], 'required'],
            [['id'], 'integer'],
            [['tag_name'], 'string', 'max' => 100]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'tag_name' => 'Tag Name',
        ];
    }
}
