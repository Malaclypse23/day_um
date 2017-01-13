package de.tomahawk.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StinaController {

	private static final Logger LOG = LoggerFactory.getLogger(StinaController.class);

	@RequestMapping(value={"/", "/index.html"}, method = RequestMethod.GET)
	public String index(Model model) throws Exception {
		final StringBuilder result1 = new StringBuilder("result 1: ");
		
		model.addAttribute("result1", result1.toString());
		return "index";
	}
	
	@RequestMapping(value="/beards.html", method = RequestMethod.GET)
    public String beards(Model model) {
   	 	return "beards";
    }
	
	@RequestMapping(value="/redhands.html", method = RequestMethod.GET)
    public String redhands(Model model) {
   	 	return "redhands";
    }
	
	@RequestMapping(value="/birds.html", method = RequestMethod.GET)
    public String birds(Model model) {
   	 	return "birds";
    }
	
	@RequestMapping(value="/contact.html", method = RequestMethod.GET)
    public String contact(Model model) {
   	 	return "contact";
    }
	
	@RequestMapping(value="/shop.html", method = RequestMethod.GET)
    public String shop(Model model) {
   	 	return "shop";
    }
	
}
