import { DataTypes } from 'sequelize';

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
