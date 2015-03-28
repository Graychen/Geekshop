<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "msg".
 *
 * @property integer $id
 * @property integer $from_user_id
 * @property integer $to_user_id
 * @property string $content
 * @property integer $type
 * @property integer $status
 */
class Msg extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'msg';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'from_user_id', 'to_user_id', 'content'], 'required'],
            [['id', 'from_user_id', 'to_user_id', 'type', 'status'], 'integer'],
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
            'from_user_id' => 'From User ID',
            'to_user_id' => 'To User ID',
            'content' => 'Content',
            'type' => 'Type',
            'status' => 'Status',
        ];
    }
}
