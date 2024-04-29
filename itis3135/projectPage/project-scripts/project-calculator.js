let inputCounter = 0;
            //Add another row of data for input
            function addInputs(){
                inputCounter++;
                const additionalInput = document.getElementById("additional-input");
                const newSet = document.createElement("div");
                newSet.innerHTML= `
                    <h2>Name ${inputCounter}</h2>
                    <input type = "text" id="name${inputCounter}">
                    <h2>Biotic Index Number ${inputCounter}</h2>
                    <input type="number" id="biotic-index${inputCounter}">
                    <h2>Count ${inputCounter}</h2>
                    <input type = "number" id="count${inputCounter}">
                    `;

                    additionalInput.appendChild(newSet);
            }
            //Calculate and display the HBI
            function calculate(){
                let totalCount = 0;
                let sumOfIndexCount = 0;
                for (let i = 1; i <= inputCounter; i++) {
                    const bioticIndex = parseFloat(document.getElementById(`biotic-index${i}`).value);
                    const count = parseInt(document.getElementById(`count${i}`).value);
                    sumOfIndexCount += bioticIndex * count;
                    totalCount += count;
                }
                const HBI = sumOfIndexCount / totalCount;
                document.getElementById("result").textContent = `Hilson-Hoff Biotic Index: ${HBI}`;

            }