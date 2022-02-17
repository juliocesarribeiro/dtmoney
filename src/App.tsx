import { useState } from 'react';
import Modal from 'react-modal';

import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions';
import { Header } from "./components/Header";
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setNewTransactionsModalOpen] = useState(false);

  function handleNewTransactionsModal() {
    setNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal() {
    setNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleNewTransactionsModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


