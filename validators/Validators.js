const Joi = require('joi');

const createTodoValidator = Joi.object({
    note:Joi.string().required().min(5).max(50).messages({
        "string.empty" : "Not kısmı boş bırakılamaz !",
        "string.base" : "Notunuz yazı türünde olmalı !",
        "string.min" : `Notunuz en az {#limit} karakter uzunluğunda olmalı !`,
        "string.max" : `Notunuz en fazla {#limit} karakter uzunluğunda olmalı !`,
        "any.required" : "Not alanını doldurunuz !"
    }),
    dueDate:Joi.date().required().messages({
        "date.base" : "Geçerli bir tarih giriniz !",
        "any.required" : "Tarih alanını doldurunuz !"
    }),
    importance:Joi.string().required().valid("Acil","Acil Değil").messages({
        "string.empty" : "Aciliyet durumu boş bırakılamaz !",
        "string.base" : "Geçerli bir aciliyet derecesi giriniz.",
        "string.valid" : "Geçerli bir aciliyet derecesi giriniz.",
        "any.only" : "Geçerli bir aciliyet derecesi giriniz.",
        "any.required" : "Geçerli bir aciliyet derecesi giriniz."
    })
});

const updateTodoValidator = Joi.object({
    id:Joi.string().required().messages({
        "string.empty" : "Güncellemek için görev id'si gerekli !",
        "string.base" : "Geçersiz id !",
        "any.required" : "Güncellemek için görev id'si gerekli !"
    }),
    note:Joi.string().required().min(5).max(50).messages({
        "string.empty" : "Not kısmı boş bırakılamaz !",
        "string.base" : "Notunuz yazı türünde olmalı !",
        "string.min" : `Notunuz en az {#limit} karakter uzunluğunda olmalı !`,
        "string.max" : `Notunuz en fazla {#limit} karakter uzunluğunda olmalı !`,
        "any.required" : "Not alanını doldurunuz !"
    }),
    dueDate:Joi.date().required().messages({
        "date.base" : "Geçerli bir tarih giriniz !",
        "any.required" : "Tarih alanını doldurunuz !"
    }),
    importance:Joi.string().required().valid("Acil","Acil Değil").messages({
        "string.empty" : "Aciliyet durumu boş bırakılamaz !",
        "string.base" : "Geçerli bir aciliyet derecesi giriniz.",
        "string.valid" : "Geçerli bir aciliyet derecesi giriniz.",
        "any.only" : "Geçerli bir aciliyet derecesi giriniz.",
        "any.required" : "Geçerli bir aciliyet derecesi giriniz."
    })
});

module.exports = {
    createTodoValidator,
    updateTodoValidator
}