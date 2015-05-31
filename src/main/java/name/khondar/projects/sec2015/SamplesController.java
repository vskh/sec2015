package name.khondar.projects.sec2015;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

/**
 * SamplesController <Description>
 *
 * @author vadya
 */

@Controller
public class SamplesController {

    @Value("${app.description}")
    private String appDescription;

    @ModelAttribute("appdescription")
    public String addDescription() {
        return appDescription;
    }

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/hashtagger")
    public String hashTagger(Model model) {
        return "redirect:hashtagger/usual";
    }

    @RequestMapping("/hashtagger/{type}")
    public String hashTagger(@PathVariable Optional<String> type, Model model) {
        switch (type.get()) {
            case "reactive":
            case "usual":
                model.addAttribute("type", type.get());
                break;
            default:
                model.addAttribute("type", "usual");
                break;
        }

        return "hashtagger";
    }
}
