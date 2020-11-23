class Covid {
    constructor(confirmados, obitos, suspeitos, descartados, recuperados, acompanhados) {
        this.confirmados = confirmados;
        this.obitos = obitos;
        this.suspeitos = suspeitos;
        this.descartados = descartados;
        this.recuperados = recuperados;
        this.acompanhados = acompanhados;
    }
}

module.exports = Covid;