import toast from "react-hot-toast";

let ws: WebSocket;

var success_toast: string;

export function initializeWs() {
    ws = new WebSocket("ws://localhost:31375");
    ws.addEventListener("open", () => {
        console.log("Established connection with codeclient.");
        toast.success("Connected to CodeClient!");
    });
    ws.addEventListener("error", (e) => {
        toast.error("Couldn't connect to CodeClient.");
        console.log("Error occured trying with codeclient socket:", e);
    });
    ws.addEventListener("message", (e) => {
        console.log("Message from CodeClient:", e.data);
        if(e.data === "not creative mode") {
            toast.remove(success_toast);
            toast.error("You need to be in creative mode.");
        }
    });
}

export function sendTemplate(title: string, data: string) {
    const nbt = JSON.stringify({
        count: 1,
        id: "minecraft:ender_chest",
        components: {
            "minecraft:custom_name": '{text:"' + title + '",italic:false,color:"aqua"}',
            "minecraft:custom_data": {
                PublicBukkitValues: {
                    "hypercube:codetemplatedata": JSON.stringify({
                        author: "solturne",
                        name: title,
                        code: data,
                    }),
                },
            },
        },
    });
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(`give ${nbt}`);
        success_toast = toast.success("Template sent to CodeClient!");
    } else {
        toast.error("CodeClient is not connected.")
    }
}

export function getGiveCommand(title: string, data: string): string {
    return `/give @p ender_chest[custom_name='{text:"${title}",italic:false,color:aqua}',custom_data={PublicBukkitValues:{"hypercube:codetemplatedata": '{"author": "solturne", "name": "${title}", "code": "${data}"}'}}]`;
}