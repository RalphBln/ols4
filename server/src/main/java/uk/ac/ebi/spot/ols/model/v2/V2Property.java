

package uk.ac.ebi.spot.ols.model.v2;

import org.springframework.hateoas.core.Relation;
import uk.ac.ebi.spot.ols.service.GenericLocalizer;
import uk.ac.ebi.spot.ols.service.OwlGraphNode;

@Relation(collectionRelation = "properties")
public class V2Property extends DynamicJsonObject {

    public V2Property(OwlGraphNode node, String lang) {

        if(!node.hasType("property")) {
            throw new IllegalArgumentException("Node has wrong type");
        }

        put("lang", lang);

        for(String k : node.asMap().keySet()) {
            Object v = node.asMap().get(k);
            put(k, GenericLocalizer.localize(v, lang));
        }

    }

}

