import * as React from "react";

import Server from "../components/Server/Server";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const initialServers = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: true},
    {id: 4, isActive: true},
  ];

  const [servers, setServers] = React.useState(initialServers);

  const handleServerShutDown = (serverId: number) => {
    const serverIndex = servers.findIndex((server) => server.id === serverId);
    const newServerStatus = [...servers];

    newServerStatus[serverIndex].isActive = !newServerStatus[serverIndex].isActive;
    setServers(newServerStatus);
  };

  const handleShutDownAllServers = () => {
    const newServersStatus = servers.map((server) => {
      server.isActive = false;

      return server;
    });

    setServers(newServersStatus);
  };

  const handleAddServer = () => {
    const newServer = {id: servers.length + 1, isActive: true};
    const newServerStatus = [...servers, newServer];

    setServers(newServerStatus);
  };

  const handleDeleteServer = (serverId: number) => {
    const newServerStatus = [...servers];

    const serverIndex = servers.findIndex((server) => server.id === serverId);

    newServerStatus.splice(serverIndex, 1);
    newServerStatus.map((server) => {
      if (server.id > serverIndex) server.id = server.id - 1;

      return server;
    });
    setServers(newServerStatus);
  };

  const handleRestartAllServers = () => {
    const newServersStatus = servers.map((server) => {
      server.isActive = false;

      return server;
    });

    setServers(newServersStatus);

    setTimeout(() => {
      const restartedServers = newServersStatus.map((server) => {
        server.isActive = true;

        return server;
      });

      setServers(restartedServers);
    }, 2000);
  };

  return (
    <>
      <Header
        addServer={() => handleAddServer()}
        restartServers={() => handleRestartAllServers()}
        shutDownServers={() => handleShutDownAllServers()}
      />
      <main className={`${styles.main_container} ${styles.container}`}>
        {servers.map((server) => (
          <Server
            key={server.id}
            deleteServer={() => handleDeleteServer(server.id)}
            id={server.id}
            isActive={server.isActive}
            setIsActive={() => handleServerShutDown(server.id)}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
