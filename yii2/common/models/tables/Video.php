<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "video".
 *
 * @property integer $id
 * @property integer $parent_id
 * @property string $video_url
 * @property integer $type
 * @property integer $status
 */
class Video extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'video';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'parent_id', 'video_url', 'type'], 'required'],
            [['id', 'parent_id', 'type', 'status'], 'integer'],
            [['video_url'], 'string', 'max' => 100]
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
            'video_url' => 'Video Url',
            'type' => 'Type',
            'status' => 'Status',
        ];
    }
}
