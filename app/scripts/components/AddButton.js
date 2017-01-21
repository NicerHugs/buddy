import {Link} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default () => {
		return (
			<Link to="add">
				<FloatingActionButton className="add-btn">
					<ContentAdd />
				</FloatingActionButton>
			</Link>
		);
	}
