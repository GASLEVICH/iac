const sequelize = require('../db');
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    f_name: {type: DataTypes.STRING},
    s_name: {type: DataTypes.STRING},
    p_name: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true}
}, {timestamps: false})

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    post_name: {type: DataTypes.STRING, unique: true},
}, {timestamps: false})

const Dep = sequelize.define('dep', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dep_type: {type: DataTypes.STRING, unique: true}
}, {timestamps: false})

const Oa = sequelize.define('oa', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    oa_name: {type: DataTypes.STRING, unique: true},
    oa_vncode: {type: DataTypes.STRING, unique: true},
    oa_adress: {type: DataTypes.STRING},
    oa_locality: {type: DataTypes.STRING},
    oa_phone: {type: DataTypes.STRING, unique: true},
    oa_email: {type: DataTypes.STRING},
    oa_ip: {type: DataTypes.STRING, unique: true},
}, {timestamps: false})

const Oa_spo = sequelize.define('oa_spo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}, {timestamps: false})

const Spo = sequelize.define('spo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    spo_name: {type: DataTypes.STRING, unique: true},
    old_version: {type: DataTypes.STRING},
    last_version: {type: DataTypes.STRING},
}, {timestamps: false})

const Pred = sequelize.define('pred', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pred_f_name: {type: DataTypes.STRING},
    pred_s_name: {type: DataTypes.STRING},
    pred_p_name: {type: DataTypes.STRING},
})

const Executor = sequelize.define('executor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    author_f_name: {type: DataTypes.STRING},
    author_s_name: {type: DataTypes.STRING},
    author_p_name: {type: DataTypes.STRING}
}, {timestamps: false})

const Tiket_pts = sequelize.define('tiket_pts',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tiket_pts_numb_iac: {type: DataTypes.INTEGER},
    tiket_pts_numb_support: {type: DataTypes.STRING},
    tiket_pts_problem: {type: DataTypes.STRING},
}, {timestamps: false})

const Tiket_pts_state = sequelize.define('tiket_pts_state', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    state_getdate: {type: DataTypes.DATEONLY}
})

const Tiket_state = sequelize.define('tiket_state',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tiket_pts_state_name: {type: DataTypes.STRING},
})

const Tiket_type = sequelize.define('tiket_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tiket_type_name: {type: DataTypes.STRING}
})

const Tiket_character = sequelize.define('tiket_character', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tiket_charakter_name: {type: DataTypes.STRING}
})

const Tiket_category = sequelize.define('tiket_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tiket_category_name: {type: DataTypes.STRING}
})

const Tiket_result = sequelize.define('tiket_result', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    damage: {type: DataTypes.STRING},
    idendificate_error: {type: DataTypes.STRING},
    result: {type: DataTypes.STRING}
}, {timestamps: false})

const Repair_category = sequelize.define('repair_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}, {timestamps: false})

const Repair = sequelize.define('repair', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    repair_category_name: {type: DataTypes.STRING}
}, {timestamps: false})

const Cause = sequelize.define('cause', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cause_name: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const Conclusion = sequelize.define('conclusion', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    conclusion_name: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const Util = sequelize.define('util', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    util_name: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const Result_remark = sequelize.define('result_remark', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    result_remark_name: {type: DataTypes.STRING, allowNull: false}
}, {timestamps: false})

const Contractor = sequelize.define('contractor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    contractor_name: {type: DataTypes.STRING, allowNull: false},
    contractor_inn: {type: DataTypes.STRING},
    contractor_bik: {type: DataTypes.STRING}
}, {timestamps: false})

const Contractor_type = sequelize.define('contractor_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    contractor_type_name: {type: DataTypes.STRING}
}, {timestamps:false})

const Contracts = sequelize.define('contracts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    regnum: {type: DataTypes.STRING, allowNull: false},
    regdate: {type: DataTypes.DATE},
    lastdate: {type: DataTypes.DATE},
    create: {type: DataTypes.DATEONLY},
    sumval: {type: DataTypes.BIGINT},
    remark: {type: DataTypes.STRING}
}, {timestamps:false})

const Pts = sequelize.define('pts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pts_name: {type: DataTypes.STRING, allowNull: false},
    pts_invnumber: {type: DataTypes.STRING, allowNull: false},
    pts_sernumber: {type: DataTypes.STRING},
    startdate: {type: DataTypes.DATE},
    lastdate: {type: DataTypes.DATE},
    remark: {type: DataTypes.STRING}
}, {timestamps:false})

const Owner = sequelize.define('owner', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    owner_name: {type: DataTypes.STRING}
}, {timestamps:false})

const Pts_category = sequelize.define('pts_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pts_category_name: {type: DataTypes.STRING, allowNull: false}
}, {timestamps:false})

const Pts_type = sequelize.define('pts_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pts_type_name: {type: DataTypes.STRING}
}, {timestamps:false})


Post.hasMany(User)
User.belongsTo(Post)

Dep.hasMany(Post)
Post.belongsTo(Dep)

User.hasMany(Executor)
Executor.belongsTo(User)

Post.hasMany(Author)
Author.belongsTo(Post)

Oa.hasMany(Author)
Author.belongsTo(Oa)

Oa.hasMany(Pred)
Pred.belongsTo(Oa)

Oa.hasMany(Tiket_pts)
Tiket_pts.belongsTo(Oa)

Oa.hasMany(Pts)
Pts.belongsTo(Oa)

Tiket_pts.hasOne(Tiket_result)
Tiket_result.belongsTo(Tiket_pts)

Tiket_type.hasMany(Tiket_pts)
Tiket_pts.belongsTo(Tiket_type)

Tiket_character.hasMany(Tiket_pts)
Tiket_pts.belongsTo(Tiket_character)

Tiket_category.hasMany(Tiket_pts)
Tiket_pts.belongsTo(Tiket_category)

Spo.hasMany(Tiket_pts)
Tiket_pts.belongsTo(Spo)

Cause.hasMany(Tiket_result)
Tiket_result.belongsTo(Cause)

Conclusion.hasMany(Tiket_result)
Tiket_result.belongsTo(Conclusion)

Util.hasMany(Tiket_result)
Tiket_result.belongsTo(Util)

Result_remark.hasMany(Tiket_result)
Tiket_result.belongsTo(Result_remark)

Pts.hasMany(Tiket_pts)
Tiket_pts.belongsTo(Pts)

Owner.hasMany(Pts)
Pts.belongsTo(Owner)

Pts_type.hasMany(Pts)
Pts.belongsTo(Pts_type)

Pts_category.hasMany(Pts_type)
Pts_type.belongsTo(Pts_category)

Contractor.hasMany(Repair)
Repair.belongsTo(Contractor)

Contractor.hasMany(Contracts)
Contracts.belongsTo(Contractor)

Contractor_type.hasMany(Contractor)
Contractor.belongsTo(Contractor_type)

Oa.belongsToMany(Spo, {through: Oa_spo})
Spo.belongsToMany(Oa, {through: Oa_spo})

Tiket_pts.belongsToMany(Tiket_state, {through: Tiket_pts_state})
Tiket_state.belongsToMany(Tiket_pts, {through: Tiket_pts_state})

Tiket_result.belongsToMany(Repair, {through: Repair_category})
Repair.belongsToMany(Tiket_result, {through: Repair_category})


module.exports = {
    User,
    Post,
    Dep,
    Oa,
    Oa_spo,
    Spo,
    Pred,
    Executor,
    Author,
    Tiket_pts,
    Tiket_state,
    Tiket_character,
    Tiket_result,
    Tiket_category,
    Tiket_pts_state,
    Tiket_type,
    Repair_category,
    Repair,
    Cause,
    Conclusion,
    Util,
    Result_remark,
    Contractor,
    Contractor_type,
    Contracts,
    Pts,
    Owner,
    Pts_category,
    Pts_type
}
