'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) =>{
    class Markdown extends Model{
        static associate(models){

        }
    };
    Markdown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        doctorId: DataTypes.INTEGER,
        specialityId: DataTypes.INTEGER,
        clinicID: DataTypes.INTEGER,
    },{
        sequelize,
        modelName: 'Markdown',
    });
    return Markdown;
}