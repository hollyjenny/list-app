import { Server } from "miragejs"

export async function getServer () {
    /**
     * @description create mirage api list items
     */
    let server = new Server();

    return(
        server.get("/api/listItems", { listItems: [
        { id: 1, desc: "Front End Web Developer" },
        { id: 2, desc: "Picked up React after returning from maternity leave (March)" },
        { id: 3, desc: "Hard worker" },
        { id: 4, desc: "Willing to give anything a bash and learn from it" },
        { id: 5, desc: "Likes to finish a list on the number 5" }
    ] }),
        server.get("/api/users", { users: [{ id: 1, name: "luke.greene", pass: "Duggee" }] })
    );
};