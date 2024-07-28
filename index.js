import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const url = "https://fejykgwqdcrihkrfmrjh.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlanlrZ3dxZGNyaWhrcmZtcmpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxNTk3NDUsImV4cCI6MjAzNzczNTc0NX0.lw0kKsUOjPStV5pJsQC25Cg8LJbf5UVjrIBCdBm-BOI";

const supabase = createClient(url, key);


const { data, error } = await supabase.from('arcade').select('"User Name", "Google Cloud Skills Boost Profile URL", "# of Skill Badges Completed", "# of Arcade Games Completed", "# of Trivia Games Completed", "Access Code Redemption Status"').order('"# of Skill Badges Completed"', { ascending: false }, '"User Name"', { ascending: true });
if (error) {
    console.log(error);
}




const add_data = (data, index) => {
    const tbody = document.getElementById("tablebody");
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = index + 1;
    th.scope = "row";
    const a = document.createElement("a");
    a.href = data['Google Cloud Skills Boost Profile URL'];
    a.target = "_blank";
    a.innerHTML = data['User Name'];
    a.classList += "profilelink";
    const tdn = document.createElement("td");
    tdn.appendChild(a);
    const tds = document.createElement("td");
    tds.textContent = data['# of Skill Badges Completed'];
    const tda = document.createElement("td");
    tda.textContent = data['# of Arcade Games Completed'];
    const tdt = document.createElement("td");
    tdt.textContent = data['# of Trivia Games Completed'];
    if (data['Access Code Redemption Status'] === "No") {
        th.className += "bg-warning";
        tdn.className += "bg-warning";
        tds.className += "bg-warning";
        tda.className += "bg-warning";
        tdt.className += "bg-warning";
    }

    tr.appendChild(th);
    tr.appendChild(tdn);
    tr.appendChild(tds);
    tr.appendChild(tda);
    tr.appendChild(tdt);
    tbody.appendChild(tr);
};


data.forEach((element, index) => {
    add_data(element, index);
});
