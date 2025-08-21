# Dashboard BI & Performance - Edson Burger

## 🚀 Deploy no Railway com Domínio Personalizado

### 📋 Pré-requisitos
- Conta no GitHub
- Conta no Railway (railway.app)
- Domínio edsonburger.com.br configurado

### 🔧 Passos para Deploy

#### 1. **Criar Repositório no GitHub**
```bash
# No seu computador local
git clone [URL_DO_REPOSITORIO]
cd dashboard-bi-performance
git add .
git commit -m "Dashboard BI & Performance inicial"
git push origin main
```

#### 2. **Conectar no Railway**
1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Escolha o repositório do dashboard

#### 3. **Configurar Variáveis (se necessário)**
- No Railway, vá em "Variables"
- Adicione: `PORT=3000` (se necessário)

#### 4. **Configurar Domínio Personalizado**
1. No Railway, vá em "Settings" > "Domains"
2. Clique em "Custom Domain"
3. Digite: `manus.edsonburger.com.br`
4. Copie o CNAME fornecido pelo Railway

#### 5. **Configurar DNS no Hostinger**
1. Acesse o painel do Hostinger
2. Vá em "Gerenciar DNS" para edsonburger.com.br
3. Adicione um registro CNAME:
   - **Nome**: `manus`
   - **Valor**: [CNAME fornecido pelo Railway]
   - **TTL**: 3600

#### 6. **Aguardar Propagação**
- DNS pode levar até 24h para propagar
- Teste em: `https://manus.edsonburger.com.br`

### 🎯 Recursos do Dashboard

#### 📊 **Dados Incluídos**
- ✅ Receita total: R$ 147.384,62
- ✅ ROAS Pago: 1,21 (melhorado)
- ✅ ROI Geral: -14,6% (prejuízo reduzido)
- ✅ Breakdown completo de custos
- ✅ Análise por plataforma (Yampi/Eduzz)
- ✅ Taxas reais calculadas
- ✅ Custos NCM detalhados

#### 🎨 **Interface**
- ✅ Design responsivo e moderno
- ✅ 8 abas de análise completa
- ✅ Gráficos interativos
- ✅ Alertas visuais
- ✅ Recomendações estratégicas

### 🔒 **Privacidade**
- ✅ Dados hospedados no seu domínio
- ✅ Controle total sobre acesso
- ✅ Sem dados em serviços públicos

### 📞 **Suporte**
Em caso de dúvidas no deploy, verificar:
1. Logs no Railway
2. Configuração DNS no Hostinger
3. Status do build no Railway

---
**Dashboard criado por Manus AI para análise de performance de negócios digitais.**

