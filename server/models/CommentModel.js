module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("comments", {// same as mongoose.model("name", schema)
        commentBody: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
      });
    
      return Comments;
}