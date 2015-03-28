<?php

namespace common\models\tables;

use Yii;

/**
 * This is the model class for table "project".
 *
 * @property integer $id
 * @property string $title
 * @property string $intro
 * @property integer $time
 * @property integer $money
 * @property integer $status
 * @property integer $type
 */
class Project extends \yii\db\ActiveRecord 
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'project';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'title'], 'required'],
            [['id', 'time', 'money', 'status', 'type'], 'integer'],
            [['title', 'intro'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'intro' => 'Intro',
            'time' => 'Time',
            'money' => 'Money',
            'status' => 'Status',
            'type' => 'Type',
        ];
    }

    public function getattributeLabels(){

    }

    public function setattributeLabel(){
        
    }
    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        return static::findOne(['id' => $id, 'status' => self::STATUS_ACTIVE]);
    }

    public function getProjectContent()
    {
        return $this->hasOne(ProjectContent::className(),['id'=>'project_id']);
    }

    public function getProjectReturn()
    {
        return $this->hasOne(ProjectReturn::className(),['id'=>'project_id']);
    }

    public function getImage()
    {
        return $this->hasOne(Image::className(),['id'=>'parent_id']);
    }


    public function getTag(){
        return $this->hasMany(Tag::className(),['id'=>'tag_id'])->viaTable('id_project_tag',['project_id'=>'id']);
    }

}
