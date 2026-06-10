function Home({onLogout}) {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Welcome</h1>
            <button onClick={onLogout}>Log out</button>
        </div>
    );
};

export default Home;