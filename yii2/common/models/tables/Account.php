<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "account".
 *
 * @property integer $id
 * @property integer $balance
 * @property integer $income
 * @property integer $expend
 * @property integer $withdraw
 * @property string $time
 * @property string $name
 */
class Account extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'account';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'balance', 'income'], 'required'],
            [['id', 'balance', 'income', 'expend', 'withdraw'], 'integer'],
            [['time'], 'safe'],
            [['name'], 'string', 'max' => 100]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'balance' => 'Balance',
            'income' => 'Income',
            'expend' => 'Expend',
            'withdraw' => 'Withdraw',
            'time' => 'Time',
            'name' => 'Name',
        ];
    }
}
