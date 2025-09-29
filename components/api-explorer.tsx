"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Play, Code } from "lucide-react"

export function ApiExplorer() {
  const [activeTab, setActiveTab] = useState("creditCheck")
  const [copied, setCopied] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [response, setResponse] = useState(null)

  const apiEndpoints = {
    creditCheck: {
      title: "Verificação de Crédito",
      description: "Verifique a elegibilidade de crédito de um cliente",
      endpoint: "/api/v1/credit-check",
      method: "POST",
      request: `{
  "customerId": "cust_123456",
  "amount": 50000,
  "term": 12,
  "documentNumber": "12345678901"
}`,
      response: `{
  "status": "approved",
  "score": 780,
  "limit": 75000,
  "interestRate": 1.2,
  "recommendation": "Oferta Premium",
  "details": {
    "riskLevel": "low",
    "approvalFactor": 0.92,
    "documents": ["complete"]
  }
}`,
    },
    paymentProcess: {
      title: "Processamento de Pagamento",
      description: "Processe um pagamento para um cliente",
      endpoint: "/api/v1/payments",
      method: "POST",
      request: `{
  "customerId": "cust_123456",
  "amount": 1250.75,
  "currency": "BRL",
  "description": "Pagamento de fatura",
  "paymentMethod": {
    "type": "credit_card",
    "tokenId": "tok_visa_123456"
  }
}`,
      response: `{
  "paymentId": "pay_789012",
  "status": "succeeded",
  "amount": 1250.75,
  "currency": "BRL",
  "fee": 37.52,
  "netAmount": 1213.23,
  "createdAt": "2025-05-19T14:51:21Z",
  "receipt": {
    "url": "https://api.berthaintegradora.com/receipts/pay_789012"
  }
}`,
    },
    customerCreate: {
      title: "Criação de Cliente",
      description: "Crie um novo cliente no sistema",
      endpoint: "/api/v1/customers",
      method: "POST",
      request: `{
  "name": "Empresa ABC Ltda",
  "email": "contato@empresaabc.com.br",
  "documentType": "cnpj",
  "documentNumber": "12345678901234",
  "address": {
    "street": "Av. Paulista",
    "number": "1000",
    "city": "São Paulo",
    "state": "SP",
    "zipCode": "01310-100"
  },
  "contactPerson": {
    "name": "João Silva",
    "phone": "+5511987654321",
    "role": "Diretor Financeiro"
  }
}`,
      response: `{
  "customerId": "cust_987654",
  "status": "active",
  "createdAt": "2025-05-19T14:51:21Z",
  "verificationStatus": "pending",
  "requiredDocuments": [
    "comprovante_endereco",
    "contrato_social"
  ],
  "apiKey": "sk_test_abcdefghijklmnopqrstuvwxyz"
}`,
    },
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runApiRequest = () => {
    setIsRunning(true)
    // Simulate API request
    setTimeout(() => {
      setResponse(apiEndpoints[activeTab].response)
      setIsRunning(false)
    }, 1500)
  }

  return (
    <Card className="shadow-lg overflow-hidden mt-12">
      <CardHeader className="bg-bertha-blue text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">API Explorer</CardTitle>
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Documentação Interativa</span>
            <Code className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="creditCheck" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="creditCheck">Verificação de Crédito</TabsTrigger>
            <TabsTrigger value="paymentProcess">Processamento de Pagamento</TabsTrigger>
            <TabsTrigger value="customerCreate">Criação de Cliente</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-bertha-blue">{apiEndpoints[activeTab].title}</h3>
                <p className="text-sm text-slate-600">{apiEndpoints[activeTab].description}</p>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="bg-bertha-blue text-white text-xs px-2 py-1 rounded">
                      {apiEndpoints[activeTab].method}
                    </span>
                    <code className="text-sm bg-slate-100 px-2 py-1 rounded">{apiEndpoints[activeTab].endpoint}</code>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => copyToClipboard(apiEndpoints[activeTab].endpoint)}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copiar endpoint</span>
                  </Button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium">Corpo da Requisição</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => copyToClipboard(apiEndpoints[activeTab].request)}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copiar requisição</span>
                  </Button>
                </div>
                <div className="bg-slate-900 text-slate-50 p-4 rounded-md overflow-auto max-h-80">
                  <pre className="text-xs">{apiEndpoints[activeTab].request}</pre>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={runApiRequest}
                  disabled={isRunning}
                  className="bg-bertha-blue text-white hover:bg-bertha-blue/90"
                >
                  {isRunning ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Executando...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Executar Requisição
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <h4 className="text-sm font-medium">Resposta</h4>
                {response ? (
                  <div className="relative">
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 bg-slate-800 text-white hover:bg-slate-700"
                        onClick={() => copyToClipboard(response)}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copiar resposta</span>
                      </Button>
                    </div>
                    <div className="bg-slate-900 text-green-400 p-4 rounded-md overflow-auto max-h-80">
                      <pre className="text-xs">{response}</pre>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-100 p-4 rounded-md h-80 flex items-center justify-center">
                    <p className="text-slate-500 text-center">
                      {isRunning ? (
                        <span className="flex items-center">
                          <div className="h-4 w-4 border-2 border-bertha-blue border-t-transparent rounded-full animate-spin mr-2"></div>
                          Processando requisição...
                        </span>
                      ) : (
                        "Clique em 'Executar Requisição' para ver a resposta da API"
                      )}
                    </p>
                  </div>
                )}
              </div>

              <div className="text-xs text-slate-500">
                <p>
                  <strong>Dica:</strong> Você pode testar esta API em seu ambiente de desenvolvimento usando o token de
                  sandbox.
                </p>
                <p className="mt-1">
                  <code className="bg-slate-100 px-1 py-0.5 rounded">
                    Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz
                  </code>
                </p>
              </div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
