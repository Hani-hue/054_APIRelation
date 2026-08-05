module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sinopsis: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tahun_terbit: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        penulis_Id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tableName: "komik",
        timestamps: true
    });
    komik.associate = (models) => {
        Komik.belongsTo(models.Penulis, {
            foreignKey: "penulis_Id",
            as: "penulis"
        });
    komik.belongsTo(models.Genre, {
            foreignKey: "genre_Id",
            as: "genre"
        });
    };
    return Komik;
};
