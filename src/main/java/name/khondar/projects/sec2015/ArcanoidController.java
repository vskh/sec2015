package name.khondar.projects.sec2015;

import org.hibernate.annotations.GenerationTime;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * ArcanoidController <Description>
 *
 * @author vadya
 */
@Controller
public class ArcanoidController {

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        return "index";
    }
}
