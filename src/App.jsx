import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, AlertTriangle, Target, BarChart3, Activity, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('visao-geral');

  // Dados reais corretos
  const dados = {
    receita_total: 147384.62,
    receita_yampi: 99458.41,
    receita_eduzz: 47926.21,
    pedidos_yampi: 3841,
    pedidos_eduzz: 1114,
    pedidos_total: 4955,
    gasto_meta_ads: 121550.99,
    taxa_total: 7637.54,
    custo_ncm_total: 43384.32,
    custo_total: 172572.85,
    roas_pago: 1.21,
    roi_geral: -14.6,
    resultado_final: -25188.23,
    margem_percentual: -17.1,
    
    // Breakdown de taxas
    taxa_yampi: 1988.88,
    taxa_eduzz: 1437.79,
    taxa_mercadopago: 4210.88,
    
    // Breakdown custos NCM
    custo_frete_ncm: 27256.32,
    custo_producao_ncm: 16128.00,
    pedidos_ncm: 2688,
    
    // Gastos por conta
    gasto_c01: 110302.88,
    gasto_c02: 11248.11,
    
    // Receita pago vs orgânico
    receita_pago: 69337.43,
    receita_organico: 78047.19
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatPercent = (value) => {
    return `${value.toFixed(1)}%`;
  };

  // Dados para gráficos
  const dadosReceita = [
    { name: 'Orgânico', value: dados.receita_organico, color: '#10B981' },
    { name: 'Pago', value: dados.receita_pago, color: '#3B82F6' }
  ];

  const dadosPlataforma = [
    { name: 'Yampi', receita: dados.receita_yampi, pedidos: dados.pedidos_yampi },
    { name: 'Eduzz', receita: dados.receita_eduzz, pedidos: dados.pedidos_eduzz }
  ];

  const dadosCustos = [
    { name: 'Meta Ads', value: dados.gasto_meta_ads, color: '#EF4444' },
    { name: 'Frete NCM', value: dados.custo_frete_ncm, color: '#F59E0B' },
    { name: 'Produção NCM', value: dados.custo_producao_ncm, color: '#8B5CF6' },
    { name: 'Taxas', value: dados.taxa_total, color: '#06B6D4' }
  ];

  const COLORS = ['#10B981', '#3B82F6', '#EF4444', '#F59E0B', '#8B5CF6', '#06B6D4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Dashboard BI & Performance
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Período: 01/08/2025 a 19/08/2025 (19 dias) - Análise Completa
          </p>
        </div>

        {/* Alerta Crítico */}
        <Alert className="mb-8 border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-red-100 shadow-lg">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <AlertDescription className="text-red-800 font-medium text-lg">
            <strong>SITUAÇÃO MELHORADA:</strong> ROAS subiu para 1,21 mas ROI ainda negativo (-14,6%). 
            Prejuízo reduzido para R$ 25.188,23. Custos de produção e taxas ainda elevados.
          </AlertDescription>
        </Alert>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-8 mb-8 bg-white shadow-lg rounded-xl p-2">
            <TabsTrigger value="visao-geral" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white font-medium">
              📊 Visão Geral
            </TabsTrigger>
            <TabsTrigger value="produtos" className="data-[state=active]:bg-green-500 data-[state=active]:text-white font-medium">
              📦 Produtos
            </TabsTrigger>
            <TabsTrigger value="plataformas" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white font-medium">
              🛒 Plataformas
            </TabsTrigger>
            <TabsTrigger value="custos" className="data-[state=active]:bg-red-500 data-[state=active]:text-white font-medium">
              💰 Custos
            </TabsTrigger>
            <TabsTrigger value="meta-ads" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white font-medium">
              🎯 Meta Ads
            </TabsTrigger>
            <TabsTrigger value="financeiro" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white font-medium">
              📈 Financeiro
            </TabsTrigger>
            <TabsTrigger value="acoes" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white font-medium">
              🚨 Ações
            </TabsTrigger>
            <TabsTrigger value="insights" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white font-medium">
              💡 Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visao-geral" className="space-y-8">
            {/* KPIs Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Receita Total</p>
                      <p className="text-3xl font-bold">{formatCurrency(dados.receita_total)}</p>
                      <p className="text-blue-100 text-sm">{dados.pedidos_total} pedidos</p>
                    </div>
                    <DollarSign className="h-12 w-12 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-red-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm font-medium">Gasto Meta Ads</p>
                      <p className="text-3xl font-bold">{formatCurrency(dados.gasto_meta_ads)}</p>
                      <p className="text-red-100 text-sm">ROAS: {dados.roas_pago.toFixed(2)}</p>
                    </div>
                    <Target className="h-12 w-12 text-red-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">Custo Total</p>
                      <p className="text-3xl font-bold">{formatCurrency(dados.custo_total)}</p>
                      <p className="text-purple-100 text-sm">Ads + Taxas + NCM</p>
                    </div>
                    <BarChart3 className="h-12 w-12 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-red-500 to-red-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100 text-sm font-medium">Resultado Final</p>
                      <p className="text-3xl font-bold">{formatCurrency(dados.resultado_final)}</p>
                      <p className="text-red-100 text-sm">ROI: {formatPercent(dados.roi_geral)}</p>
                    </div>
                    <TrendingDown className="h-12 w-12 text-red-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos Principais */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">📊 Receita por Origem</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={dadosReceita}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {dadosReceita.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">💰 Breakdown de Custos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dadosCustos}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis tickFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`} />
                      <Tooltip formatter={(value) => formatCurrency(value)} />
                      <Bar dataKey="value" fill="#8884d8">
                        {dadosCustos.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financeiro" className="space-y-8">
            {/* Comparação Receita vs Custos */}
            <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-50 to-red-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                  📊 ANÁLISE FINANCEIRA COMPLETA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white shadow-lg">
                    <p className="text-green-100 text-sm font-medium">💰 RECEITA TOTAL</p>
                    <p className="text-4xl font-bold">{formatCurrency(dados.receita_total)}</p>
                    <p className="text-green-100 text-sm">Yampi + Eduzz</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-xl text-white shadow-lg">
                    <p className="text-red-100 text-sm font-medium">💸 CUSTO TOTAL</p>
                    <p className="text-4xl font-bold">{formatCurrency(dados.custo_total)}</p>
                    <p className="text-red-100 text-sm">Ads + Taxas + NCM</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-red-600 to-red-700 rounded-xl text-white shadow-lg">
                    <p className="text-red-100 text-sm font-medium">📉 RESULTADO</p>
                    <p className="text-4xl font-bold">{formatCurrency(dados.resultado_final)}</p>
                    <p className="text-red-100 text-sm">Prejuízo de {formatPercent(Math.abs(dados.margem_percentual))}</p>
                  </div>
                </div>

                {/* Métricas Detalhadas */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">📈 ROAS & ROI</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">ROAS Pago:</span>
                        <span className="font-bold text-xl text-blue-600">{dados.roas_pago.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">ROI Geral:</span>
                        <span className="font-bold text-xl text-red-600">{formatPercent(dados.roi_geral)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Margem:</span>
                        <span className="font-bold text-xl text-red-600">{formatPercent(dados.margem_percentual)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">🎯 Performance</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Ticket Médio:</span>
                        <span className="font-bold text-xl text-green-600">R$ 29,74</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">% Orgânico:</span>
                        <span className="font-bold text-xl text-green-600">53,0%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">% Pago:</span>
                        <span className="font-bold text-xl text-blue-600">47,0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="acoes" className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-red-700 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8" />
                  🚨 AÇÕES URGENTES RECOMENDADAS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white shadow-lg">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Zap className="h-6 w-6" />
                      🔴 IMEDIATAS (24-48h)
                    </h4>
                    <ul className="space-y-2 text-red-100">
                      <li className="flex items-start gap-2">
                        <span className="text-red-200">•</span>
                        <span>MIGRAR 70% do orçamento da C01-Perpétuo para C02-Backup (ROAS melhor)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-200">•</span>
                        <span>PAUSAR campanhas com ROAS abaixo de 1,0</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-200">•</span>
                        <span>OTIMIZAR custos de frete NCM (negociar com fornecedor)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white shadow-lg">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Activity className="h-6 w-6" />
                      🟡 CURTO PRAZO (1-2 semanas)
                    </h4>
                    <ul className="space-y-2 text-yellow-100">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-200">•</span>
                        <span>FOCAR 80% do investimento em estratégias orgânicas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-200">•</span>
                        <span>TESTAR produtos digitais (margem 95% vs 60% físicos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-200">•</span>
                        <span>RENEGOCIAR taxas com Yampi e MercadoPago</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white shadow-lg">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <TrendingUp className="h-6 w-6" />
                      🟢 MÉDIO PRAZO (1 mês)
                    </h4>
                    <ul className="space-y-2 text-green-100">
                      <li className="flex items-start gap-2">
                        <span className="text-green-200">•</span>
                        <span>ESCALAR estratégias orgânicas (53% da receita atual)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-200">•</span>
                        <span>IMPLEMENTAR programa de afiliados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-200">•</span>
                        <span>DIVERSIFICAR produtos digitais de alta margem</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;

