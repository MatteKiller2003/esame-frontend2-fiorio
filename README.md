# Prova di Fine Modulo — Frontend React

Sviluppato da Matteo Fiorio

Applicazione web sviluppata in React, TypeScript e React Router che interagisce con le API di The Movie Database (TMDB).

## Requisiti

- Node.js (versione 18 o superiore consigliata)
- npm

## Installazione e Avvio

1. Entrare nella cartella del progetto:
```bash
cd esame-fe2-fiorio
```

2. Configurare la chiave API:
Creare un file `.env` all'interno della cartella `esame-fe2-fiorio` con la seguente variabile:
```env
VITE_API_KEY=la_tua_api_key_tmdb
```

3. Installare le dipendenze:
```bash
npm install
```

4. Avviare l'applicazione in modalita di sviluppo:
```bash
npm run dev
```

L'applicazione sara raggiungibile nel browser all'indirizzo indicato da Vite (solitamente `http://localhost:5173`).

## Script Disponibili

- `npm run dev`: avvia il server di sviluppo Vite.
- `npm run build`: esegue il type-check con TypeScript e compila per la produzione.
- `npm run lint`: esegue l'analisi statica del codice con Oxlint.
- `npm run preview`: visualizza in anteprima locale la build di produzione.

## Struttura e Componenti

L'applicazione e strutturata secondo una logica a componenti e sfrutta React Router per la navigazione tra le due pagine previste:

- `main`: punto di ingresso dell'applicazione e configurazione del routing (`BrowserRouter`, `Routes`, `Route`).
- `Shell`: layout condiviso da entrambe le pagine, contiene `Header` e l'`Outlet` per il rendering dei contenuti.
- `Header`: barra di navigazione superiore con il brand e il link alla Home.
- `MoviesPage`: vista principale (rotta `/`), effettua la fetch dell'elenco film da TMDB, gestisce gli stati di caricamento ed errore e renderizza la griglia.
- `MovieCard`: mattoncino riutilizzabile che mostra locandina, titolo, data, voto, anteprima della trama e pulsante di navigazione verso il dettaglio.
- `MovieDetailPage`: vista di dettaglio (rotta `/movies/:id`), estrae l'identificativo dall'URL tramite `useParams`, effettua la chiamata API del singolo film e gestisce gli stati di attesa.
- `MovieDetailCard`: componente di visualizzazione approfondita con dettagli completi (tagline, durata, voti, generi, trama estesa e case di produzione).
