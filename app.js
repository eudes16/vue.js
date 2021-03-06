var app = new Vue({
    el: "#app",
    data : {
        title: "Contas a pagar",
        menus: [
            {id: 0, name: "Listar contas"},
            {id: 1, name: "Criar contas",}
        ],
        activedView: 0,
        test: '',
        bills: [
            { date_due: "20/08/2016", name: "Conta de Luz", value: 70.99, done: 1 },
            { date_due: "21/08/2016", name: "Conta de Água", value: 50.99, done: 0 },
            { date_due: "22/08/2016", name: "Conta de Telefone", value: 55.99, done: 0 },
            { date_due: "23/08/2016", name: "Supermercado", value: 625.99, done: 0 },
            { date_due: "24/08/2016", name: "Cartão de Crédito", value: 1500.99, done: 0 },
            { date_due: "25/08/2016", name: "Empréstimo", value: 2000.99, done: 0 },
            { date_due: "26/08/2016", name: "Gasolina", value: 200, done: 0 },
        ]
    },
    computed: {
        status: function () {
            var count = 0;
            for(var i in this.bills) {
                if (! this.bills[i].done) {
                    count++;
                }
            }
            return !count ? "Nenhuma conta a pagar" : "Exixtem " + count + " a serem pagas";
        }
    },
    methods : {
        showView : function (id) {
            this.activedView = id;
        }
    }
});

app.$watch('test', function (novoValor, velhoValor){
   console.log("velhoValor: " + velhoValor + " - novoValor: " + novoValor);
});

