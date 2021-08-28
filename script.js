function App() {
	this.num1 = null;
	this.num2 = null;
	this.operation = null;
	this.sol = null;

	this.clear = function() {
		document.getElementById("text_field").value="0";
		this.num1 = null;
		this.num2 = null;
		this.operation = null;
		this.sol = null;
	}

	this.enterNum = function (val) {
		if (this.num1 === null) {
			let crnt_value = document.getElementById("text_field").value;
			if (crnt_value === "0") {
				document.getElementById("text_field").value = val;
			} else {
				document.getElementById("text_field").value += val;
			}
		} else {
			document.getElementById("text_field").value += val;
		}
	}

	this.enterOperation = function (operator) {
		if (this.num1 === null) {
			this.operation = operator;
			this.num1 = document.getElementById("text_field").value;
			switch (operator) {
				case "add":
					document.getElementById("text_field").value += " + ";
					break;
				case "sub":
					document.getElementById("text_field").value += " - ";
					break;
				case "mult":
					document.getElementById("text_field").value += " \u00d7 ";
					break;
				case "div":
					if (this.num1 === "0") {
						alert("You can't divide zero by any numner!")
						this.clear()
					} else {
						document.getElementById("text_field").value += " \u00f7 ";
					}
					break;
				default:
					pass;   
			}
		}
	}

	this.findAns = function () {
		let crnt_value = document.getElementById("text_field").value;
		if ((this.num1 !== null) & (this.operator !== null) & (crnt_value[crnt_value.length-1] !== " ")) {
			this.num2 = crnt_value.split(" ")[2];
			switch (this.operation) {
				case "add":
					this.sol = parseInt(this.num1) + parseInt(this.num2);
					break;
				case "sub":
					this.sol = parseInt(this.num1) - parseInt(this.num2);
					break;
				case "mult":
					this.sol = parseInt(this.num1) * parseInt(this.num2);
					break;
				case "div":
					if (this.num2 === "0") {
						this.sol = 0;
					}else {
						this.sol = parseInt(this.num1) / parseInt(this.num2);
					}
					break;
			}
			document.getElementById("text_field").value = JSON.parse(JSON.stringify(parseInt(this.sol)));
			this.num1 = null;
			this.num2 = null;
			this.operation = null;
			this.sol = null;
		}				
	} 
}

const calculator = new App();