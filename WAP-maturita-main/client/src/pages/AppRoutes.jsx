import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

import SluchatkaView from "./SluchatkaView/SluchatkaView";
import SluchatkaList from "./SluchatkaList/SluchatkaList";
import SluchatkaCreateForm from "./SluchatkaCreateForm/SluchatkaCreateForm";
import SluchatkaUpdateForm from "./SluchatkaUpdateForm/SluchatkaUpdateForm";
import CreatedSluchatka from "./SluchatkaCreateForm/CreatedSluchatka";
import SluchatkaDeleted from "./SluchatkaView/SluchatkaDeleted";
import SluchatkaPage from "./MainPage/Sluchatka";

import MonitorView from "./MonitorView/MonitorView";
import MonitorList from "./MonitorList/MonitorList";
import MonitorCreateForm from "./MonitorCreateForm/MonitorCreateForm";
import MonitorUpdateForm from "./MonitorUpdateForm/MonitorUpdateForm";
import CreatedMonitor from "./MonitorCreateForm/CreatedMonitor";
import MonitorDeleted from "./MonitorView/MonitorDeleted";
import MonitorPage from "./MainPage/Monitor";

import KlavesniceView from "./KlavesniceView/KlavesniceView";
import KlavesniceList from "./KlavesniceList/KlavesniceList";
import KlavesniceCreateForm from "./KlavesniceCreateForm/KlavesniceCreateForm";
import KlavesniceUpdateForm from "./KlavesniceUpdateForm/KlavesniceUpdateForm";
import CreatedKlavesnice from "./KlavesniceCreateForm/CreatedKlavesnice";
import KlavesniceDeleted from "./KlavesniceView/KlavesniceDeleted";
import KlavesnicePage from "./MainPage/Klavesnice";

import TelefonView from "./TelefonView/TelefonView";
import TelefonList from "./TelefonList/TelefonList";
import TelefonCreateForm from "./TelefonCreateForm/TelefonCreateForm";
import TelefonUpdateForm from "./TelefonUpdateForm/TelefonUpdateForm";
import CreatedTelefon from "./TelefonCreateForm/CreatedTelefon";
import TelefonDeleted from "./TelefonView/TelefonDeleted";
import TelefonPage from "./MainPage/Telefon";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/sluchatka/:id" element={<SluchatkaView />} />
        <Route path="/sluchatkas" element={<SluchatkaList />} />
        <Route path="/createsluchatka" element={<SluchatkaCreateForm />} />
        <Route path="/updatesluchatka/:id" element={<SluchatkaUpdateForm />} />
        <Route path="/createdsluchatka/:id" element={<CreatedSluchatka />} />
        <Route path="/deletedsluchatka/:id" element={<SluchatkaDeleted />} />
        <Route path="/sluchatka/" element={<SluchatkaPage />} />

        <Route path="/monitor/:id" element={<MonitorView />} />
        <Route path="/monitors" element={<MonitorList />} />
        <Route path="/createmonitor" element={<MonitorCreateForm />} />
        <Route path="/updatemonitor/:id" element={<MonitorUpdateForm />} />
        <Route path="/createdmonitor/:id" element={<CreatedMonitor />} />
        <Route path="/deletedmonitor/:id" element={<MonitorDeleted />} />
        <Route path="/monitor/" element={<MonitorPage />} />
        

        
        <Route path="/klavesnice/:id" element={<KlavesniceView />} />
        <Route path="/klavesnices" element={<KlavesniceList />} />
        <Route path="/createklavesnice" element={<KlavesniceCreateForm />} />
        <Route path="/updateklavesnice/:id" element={<KlavesniceUpdateForm />} />
        <Route path="/createdklavesnice/:id" element={<CreatedKlavesnice />} />
        <Route path="/deletedklavesnice/:id" element={<KlavesniceDeleted />} />
        <Route path="/klavesnice/" element={<KlavesnicePage />} />

        <Route path="/telefon/:id" element={<TelefonView />} />
        <Route path="/telefons" element={<TelefonList />} />
        <Route path="/createtelefon" element={<TelefonCreateForm />} />
        <Route path="/updatetelefon/:id" element={<TelefonUpdateForm />} />
        <Route path="/createdtelefon/:id" element={<CreatedTelefon />} />
        <Route path="/deletedtelefon/:id" element={<TelefonDeleted />} />
        <Route path="/telefon/" element={<TelefonPage />} />

      </Routes>
    </BrowserRouter>
  );
}
