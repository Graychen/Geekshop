<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "image".
 *
 * @property integer $id
 * @property integer $parent_id
 * @property string $image_url
 * @property integer $type
 * @property integer $status
 */
class Image extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'image';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'parent_id', 'image_url'], 'required'],
            [['id', 'parent_id', 'type', 'status'], 'integer'],
            [['image_url'], 'string', 'max' => 100]
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
            'image_url' => 'Image Url',
            'type' => 'Type',
            'status' => 'Status',
        ];
    }
}
