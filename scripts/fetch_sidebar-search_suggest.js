fetch('https://raw.githubusercontent.com/BerYoucef/sudobanana/main/sidebar.html')
                .then(res => res.text())
                .then(html => {
                    document.getElementById('sidebar_').innerHTML = html;

                    const searchBox = document.getElementById("searchBox");
                    const suggestions = document.getElementById("suggestions");
                    const sidebarItems = Array.from(document.querySelectorAll("#sidebarsug li a")).map(a => ({
                        text: a.textContent,
                        link: a.getAttribute("href"),
                        onclick: a.getAttribute("onclick")
                    }));

                    searchBox.addEventListener("input", () => {
                        const query = searchBox.value.toLowerCase().trim();
                        suggestions.innerHTML = "";

                        if (query.length > 0) {
                        const matches = sidebarItems.filter(item => item.text.toLowerCase().includes(query));

                        if (matches.length > 0) {
                            suggestions.style.display = "block";
                            matches.forEach(item => {
                            const div = document.createElement("div");
                            div.textContent = item.text;
                            div.onclick = () => {
                                searchBox.value = item.text;
                                suggestions.style.display = "none";

                                // نفّذ رابط أو دالة onclick إذا موجودة
                                if (item.onclick) {
                                eval(item.onclick);
                                } else if (item.link) {
                                window.location.href = item.link;
                                }
                            };
                            suggestions.appendChild(div);
                            });
                        } else {
                            suggestions.style.display = "none";
                        }
                        } else {
                        suggestions.style.display = "none";
                        }
                    });

                    // close window when click outside
                    document.addEventListener("click", (e) => {
                        if (!document.querySelector(".search-container").contains(e.target) &&
                            !suggestions.contains(e.target)) {
                        suggestions.style.display = "none";
                        }
                    });


                })