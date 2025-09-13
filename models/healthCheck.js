import { DataTypes } from 'sequelize';
// const { sequelize } = require('.');

const healthCheckModel = sequelize => {
  const healthCheck = sequelize.define(
    'healthCheck',
    {
      check_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        field: 'check_id'
      },
      check_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: 'check_datetime'
      }
    },
    {
      tableName: 'health_checks',
      timestamps: false,
      indexes: [
        {
          fields: ['check_datetime']
        }
      ]
    }
  );

  return healthCheck;
};

export default healthCheckModel;
