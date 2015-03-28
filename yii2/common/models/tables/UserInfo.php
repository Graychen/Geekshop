<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "user_info".
 *
 * @property integer $id
 * @property integer $user_id
 * @property integer $sex
 * @property string $address
 * @property string $ credential
 * @property integer $card_number
 */
class UserInfo extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user_info';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'user_id'], 'required'],
            [['id', 'user_id', 'sex', 'card_number'], 'integer'],
            [['address'], 'string', 'max' => 100],
            [[' credential'], 'string', 'max' => 255]
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
            'sex' => 'Sex',
            'address' => 'Address',
            ' credential' => 'Credential',
            'card_number' => 'Card Number',
        ];
    }
}
