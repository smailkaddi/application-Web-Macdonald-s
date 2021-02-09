
		const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const homeEl = document.querySelector('.home');
		const menuEl = document.querySelector('.menu');
		const aboutEl = document.querySelector('.about');
		const contactEl = document.querySelector('.contact');
		const PanierEl = document.querySelector('.Panier');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				homeEl.textContent = data[attr].home;
				menuEl.textContent = data[attr].menu;
				aboutEl.textContent = data[attr].about;
				contactEl.textContent = data[attr].contact;
				PanierEl.textContent = data[attr].Panier;
			});
		});
		
		var data = {
			  "english": 
			  {
			    "home": `acculle`,
			    "menu": "Menu2",
				"about": "Menu2",
				"contact":"Menu2",
				"Panier":"Panier2"
			  },
			  "Arabic": 
			  {
			    "home": `acculle`,
			    "menu": "Menu2",
				"about": "Menu2",
				"contact":"Menu2",
				"Panier":"Panier2"
			  },
			  "Francais": 
			  {
			    "home": `acculle`,
			    "menu": "Menu2",
				"about": "Menu2",
				"contact":"Menu2",
				"Panier":"Panier2"
			  }
			}
